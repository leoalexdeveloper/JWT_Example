# How to use:
Send a request using POST method with this body:
{
  name: 'user name',
  password: 'user password'
}
to the URI login.

The API will return a token with user information.

Access the check URI putting the token on the header key called token.

A success message will return with some user data.
## Was used a database mock with the users data at Database folder, MockDB file.
