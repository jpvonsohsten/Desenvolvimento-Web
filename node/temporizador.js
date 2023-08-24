const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob('*/5 * 16 * * 2', function () { // */5- executar de 5 em 5 segundos. *16- às 16:00 horas. * * 2- Terça - Feira.
    console.log('Executando Tarefa 1!', new Date().getSeconds())
})

setTimeout(function () {
    tarefa1.cancel()
    console.log('Executando Tarefa 1!')
}, 5000)

// setImmediate
// setInterval

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1, 5)]
regra.hour = 16
regra.second = 30

const tarefa2 = schedule.scheduleJob(regra, function () {
    console.log('Executando Tarefa 2!', new Date().getSeconds())
})