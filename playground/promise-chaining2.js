require('../src/db/mongoose')

const Task = require('../src/models/task')

// Task.findByIdAndRemove('5ea36a3ab279df127ee21590').then((task) => {
//     console.log(task)
//     return Task.countDocuments({ completed: false })
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const deleteTaskAndCount = async (id) => {
    await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ completed: false })
    return count
}

deleteTaskAndCount('5ea3c57ac86437117fd340e2').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})