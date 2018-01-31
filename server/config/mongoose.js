var mongoose = require('mongoose');
var db_name = 'pollbelt';

mongoose.connect(`mongodb://localhost/${db_name}`);