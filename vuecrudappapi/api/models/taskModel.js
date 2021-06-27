const mongoose = require('mongoose')

const { Schema } = mongoose

const taskSchema = new Schema(
	{
		task1: {
			type: String,
			required: 'task1 cannot be Null'
		},
		task2: {
			type: String,
			required: 'task2 cannot be Null'
		}
	},
	{ collection: 'task'}
)

module.exports = mongoose.model('task', taskSchema)