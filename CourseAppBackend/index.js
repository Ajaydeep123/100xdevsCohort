const express = require('express');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const app = express();


app.use(express.json());

const SECRET = 'SECr3t';  

// Define mongoose schemas
const userSchema = new mongoose.Schema({
  username: {type: String},
  password: String,
  purchasedCourses: [{
     type: mongoose.Schema.Types.ObjectId,
      ref: 'Course'
     }]
});

const adminSchema = new mongoose.Schema({
  username: String,
  password: String
});

const courseSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  imageLink: String,
  published: Boolean
});

// Define mongoose models
const User = mongoose.model('User', userSchema);
const Admin = mongoose.model('Admin', adminSchema);
const Course = mongoose.model('Course', courseSchema);

//auth
const authenticateJwt = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(' ')[1];
    jwt.verify(token, SECRET, (err, user) => {
      if (err) {
        return res.sendStatus(403);
      }
      req.user = user;
      next();
    });
  } else {
    res.sendStatus(401);
  }
};

mongoose.connect('mongodb+srv://asrajay968:<YOUR PASSWORD>@cluster0.7poatss.mongodb.net/', { 
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: "courses" 
}).then(console.log(`Db connected successfully`))
  .catch(error => {
    console.log(`Db connection failed`);
    console.log(error);
    process.exit(1);
});

// Admin routes
app.post('/admin/signup', (req, res) => {
  const { username, password } = req.body;
  Admin.findOne({ username }).then(admin => {
    if (admin) {
      res.status(403).json({ message: 'Admin already exists' });
    } else {
      bcrypt.hash(password, 10, (err, hashedPassword) => {
        if (err) {
          res.status(500).json({ message: 'Error hashing password' });
        } else {
          const obj = { username: username, password: hashedPassword };
          const newAdmin = new Admin(obj);
          newAdmin.save();
          const token = jwt.sign({ username, role: 'admin' }, SECRET, { expiresIn: '1h' });
          res.json({ message: 'Admin created successfully', token });
        }
      });
    }
  }).catch(err => {
    res.status(500).json({ message: 'Error creating admin' });
  });
});


app.post('/admin/login', async (req, res) => {
  const { username, password } = req.body;
  Admin.findOne({ username }).then(admin => {
    if (admin) {
      bcrypt.compare(password, admin.password, (err, result) => {
        if (err) {
          res.status(500).json({ message: 'Error comparing passwords' });
        } else if (result) {
          const token = jwt.sign({ username, role: 'admin' }, SECRET, { expiresIn: '1h' });
          res.json({ message: 'Logged in successfully', token });
        } else {
          res.status(403).json({ message: 'Invalid username or password' });
        }
      });
    } else {
      res.status(403).json({ message: 'Invalid username or password' });
    }
  }).catch(err => {
    res.status(500).json({ message: 'Error logging in' });
 });
});


app.post('/admin/courses', authenticateJwt, async (req, res) => {
  const course = new Course(req.body);
  await course.save();
  res.json({ message: 'Course created successfully', courseId: course.id });
});


app.put('/admin/courses/:courseId', authenticateJwt, async (req, res) => {
  const course = await Course.findByIdAndUpdate(req.params.courseId, req.body, { new: true });
  if (course) {
    res.json({ message: 'Course updated successfully' });
  } else {
    res.status(404).json({ message: 'Course not found' });
  }
});

app.get('/admin/courses', authenticateJwt, async (req, res) => {
  const courses = await Course.find({});
  res.json({ courses });
});

// User routes
// User routes
app.post('/users/signup', async (req, res) => {
  const { username, password } = req.body;
  User.findOne({ username }).then(user => {
    if (user) {
      res.status(403).json({ message: 'User already exists' });
    } else {
      bcrypt.hash(password, 10, (err, hashedPassword) => {
        if (err) {
          res.status(500).json({ message: 'Error hashing password' });
        } else {
          const newUser = new User({ username, password: hashedPassword });
          newUser.save();
          const token = jwt.sign({ username, role: 'user' }, SECRET, { expiresIn: '1h' });
          res.json({ message: 'User created successfully', token });
        }
      });
    }
  }).catch(err => {
    res.status(500).json({ message: 'Error creating user' });
  });
});

app.post('/users/login', async (req, res) => {
  const { username, password } = req.body;
  User.findOne({ username }).then(user => {
    if (user) {
      bcrypt.compare(password, user.password, (err, result) => {
        if (err) {
          res.status(500).json({ message: 'Error comparing passwords' });
        } else if (result) {
          const token = jwt.sign({ username, role: 'user' }, SECRET, { expiresIn: '1h' });
          res.json({ message: 'Logged in successfully', token });
        } else {
          res.status(403).json({ message: 'Invalid username or password' });
        }
      });
    } else {
      res.status(403).json({ message: 'Invalid username or password' });
    }
  }).catch(err => {
    res.status(500).json({ message: 'Error logging in' });
  });
});

app.get('/users/courses', authenticateJwt, async (req, res) => {
  const courses = await Course.find({published: true});
  res.json({ courses });
});

app.post('/users/courses/:courseId', authenticateJwt, async (req, res) => {
  const course = await Course.findById(req.params.courseId);
  if (course) {
    const user = await User.findOne({ username: req.user.username });
    if (user) {
      user.purchasedCourses.push(course);
      await user.save();
      res.json({ message: 'Course purchased successfully' });
    } else {
      res.status(403).json({ message: 'User not found' });
    }
  } else {
    res.status(404).json({ message: 'Course not found' });
  }
});

app.get('/users/purchasedCourses', authenticateJwt, async (req, res) => {
  const user = await User.findOne({ username: req.user.username }).populate('purchasedCourses');
  if (user) {
   res.json({ purchasedCourses: user.purchasedCourses || [] });
  } else {
    res.status(403).json({ message: 'User not found' });
  }
});

app.listen(3000, () => console.log('Server running on port 3000'));
