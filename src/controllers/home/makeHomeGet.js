export default deps => (req, res) => {
    res.render('pages/home', { title: 'Express Babel - Home', slogan: 'DI example with templates' })
}