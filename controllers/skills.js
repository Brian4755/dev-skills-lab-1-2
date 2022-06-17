import { skills } from '../data/skills-data.js'


function index(req, res) {
    res.render('skills/index', {
    skills: skills
  })
}

export {
  index,
  newSkill as new,
}