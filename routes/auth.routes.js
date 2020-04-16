const {Router} = require('express')
const bcrypt = require('bcryptjs')
const {check, validationResult} = require('express-validator')
const User = require('../models/User')
const router = Router()

router.post(
    '/register',
    // массив middlewares, которые будут делать валидацию
    [

    ]
    async (req, res) => {
    try {
        const {email, password} = req.body
        const candidate = await User.findOne({email: email})
        // проверяем есть ли уже такой пользователь
        if (candidate) {
            return res.status(400).json({message: 'Такой пользователь уже существует'})
        }
        // шифруем пароль
        const hashedPassword = await bcrypt.hash(password, 12)
        const user = new User({email, password: hashedPassword})
        // ждём сохранения пользователя в базе
        await user.save()
        res.status(201).json({message: 'Пользователь создан'})
    } catch (e) {
        res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'})
    }
})

router.post('/login', async (req, res) => {

})

module.exports = router