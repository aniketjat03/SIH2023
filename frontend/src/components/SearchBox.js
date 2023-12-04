import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

const SearchBox = ({ history }) => {
  const [keyword, setKeyword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    if (keyword.trim()) {
      history.push(`/search/${keyword}`)
    } else {
      history.push('/')
    }
  }

  return (
    <Form style={{width:"70%"}} className='d-inline-flex ml-4 my-2' onSubmit={submitHandler} inline>
      <Form.Control 
        type='text'
        name='q'
        onChange={(e) => setKeyword(e.target.value)}
        placeholder='Search Products...'
        className='mr-sm-2'
      ></Form.Control>
      <Button type='submit' variant='outline-success' className='mx-2 p-2'>
        Search
      </Button>
    </Form>
  )
}

export default SearchBox