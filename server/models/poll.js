var mongoose = require('mongoose');

var PollSchema = new mongoose.Schema({
	question: {
		type: String,
		required: [true, "Question is required"],
		minlength: [8, "Name minimum characters is 8"]
	},
	opt1: {
		type: String,
		required: [true, "Question is required"],
		minlength: [3, "Name minimum characters is 3"],
		votes: {
			type: Number

		}
	},
	opt2: {
		type: String,
		required: [true, "Question is required"],
		minlength: [3, "Name minimum characters is 3"],
		votes: {
			type: Number
		}
	},
	opt3: {
		type: String,
		required: [true, "Question is required"],
		minlength: [3, "Name minimum characters is 3"],
		votes: {
			type: Number
		}
	},
	opt4: {
		type: String,
		required: [true, "Question is required"],
		minlength: [3, "Name minimum characters is 3"],
		votes: {
			type: Number
		}
	},	
	_user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User'
	}
}, {timestamps: true});

var Poll = mongoose.model('Poll', PollSchema);

module.exports = Poll;