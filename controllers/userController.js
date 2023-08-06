//@desc     Register user
//@route    POST /api/v1/users/register
//@access   Public
const registerUser = (req, res) => {
    
  const { firstName, lastName, email, password } = req.body;

  // Simple validation
  if (!firstName || !lastName || !email || !password) {
    return res.status(400).json({ msg: 'Please enter all fields' });

    res.send('Register Route');
  }
}
//@desc     Login user
//@route    POST /api/v1/users/login
//@access   Public
  const loginUser = (req, res) => {
    res.send('Login Route');
  }

  module.exports = {
    registerUser,
    loginUser
  }
