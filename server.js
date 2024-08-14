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

app.use('/api/users', userRoutes);
app.use('/api/admins', adminRoutes);
app.use('/api/tests', testRoutes);
app.use('/api/learningMaterials', learningMaterialRoutes);
app.use('/api/questionBanks', questionBankRoutes);
app.use('/api/testSchedules', testScheduleRoutes);
app.use('/api/testResults', testResultRoutes);
app.use('/api/reports', reportRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
