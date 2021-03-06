import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { TextField, FormControl, Button, Paper, Grid } from '@material-ui/core'

import { LoginAction, SnackbarAction } from '../../redux'

const Login = (props) => {
  useEffect(() => { isLoggedIn && props.history.push('/create_strategy') })
  const { username, password, isLoggedIn } = props

  const onInputChange = ({ target: { value } }, fieldName) => {
    props.onInputChange({ [fieldName]: value })
  }

  const onLoginClick = (event) => {
    if (username.length <= 0 || password.length <= 0) {
      return props.showError('Enter valid mobile & password')
    }
    props.login({ username, password })
  }
  const onPasswordEnter = event => (event.keyCode === 13) && props.login({ username, password })

  return (
    <Paper className='login-content'>
      <Grid item xs={12} className='page-helper-text'>Enter your credentials</Grid>
      <form className='login-form'>
        <FormControl className='form-control'>
          <TextField
            name='username'
            label='User Name'
            variant='outlined'
            type='text'
            placeholder='User Name'
            className='login-input'
            required
            value={username}
            onChange={e => onInputChange(e, 'username')}
          />
        </FormControl>
        <FormControl className='form-control'>
          <TextField
            name='password'
            label='Password'
            variant='outlined'
            type='password'
            placeholder='Password'
            className='login-input'
            required
            value={password}
            onChange={e => onInputChange(e, 'password')}
            onKeyUp={onPasswordEnter}
          />
        </FormControl>
      </form>
      <Button
        color='primary'
        size='large'
        variant='contained'
        className='login-arrow'
        onClick={onLoginClick}
      >Login
      </Button>
    </Paper>
  )
}

const mapStateToProps = ({ loginStore, appStore: { isLoggedIn } }) => ({ ...loginStore, isLoggedIn })

const { onInputChange, login } = LoginAction
const mapdispatchtoprops = {
  login,
  onInputChange,
  showError: SnackbarAction.show
}
export default connect(mapStateToProps, mapdispatchtoprops)(Login)
