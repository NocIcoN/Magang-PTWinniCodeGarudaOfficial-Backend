const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');
const adminRoutes = require('./routes/adminRoutes');
const testRoutes = require('./routes/testRoutes');
const learningMaterialRoutes = require('./routes/learningMaterialRoutes');
const questionBankRoutes = require('./routes/questionBankRoutes');
const testScheduleRoutes = require('./routes/testScheduleRoutes');
const testResultRoutes = require('./routes/testResultRoutes');
const reportRoutes = require('./routes/reportRoutes');

dotenv.config();
const app = express();
app.use(express.json());

mongoose.connect(process.env.DATABASE_URL)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.use('/users', userRoutes);
app.use('/admins', adminRoutes);
app.use('/tests', testRoutes);
app.use('/learningMaterials', learningMaterialRoutes);
app.use('/questionBanks', questionBankRoutes);
app.use('/testSchedules', testScheduleRoutes);
app.use('/testResults', testResultRoutes);
app.use('/reports', reportRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// app.set('view engine', 'ejs');

// app.get('/', (req, res) => {
//   res.render('index', { title: 'Welcome to My Server' });
// });