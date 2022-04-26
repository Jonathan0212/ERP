import { useLazyQuery, gql } from '@apollo/client'
import { useState } from "react"
const GET_USER = gql`
  query User($username: String!) {
    user(username: $username) {
    username
     email
    }
  }
`;
function Login() {
    const [info, setInfo] = useState({ email: "", password: "" })
    const [getUser, getUserStatus] = useLazyQuery(GET_USER,{
        onCompleted:(data)=>{

        }
    })
    const handleChange = (e) => {
        setInfo({ ...info, [e.target.name]: e.target.value })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
       getUser({variables:{username:info.email}})
    }
    return (

        <div class="row justify-content-center">
            <div class="col-6">
                <div>
                    <form onSubmit={handleSubmit}>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Email address</label>
                            <input type="email" name="email" value={info.email} onChange={handleChange} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Password</label>
                            <input type="password" name="password" value={info.password} onChange={handleChange} class="form-control" id="exampleInputPassword1" />
                        </div>
                        {/* <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                        <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div> */}
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>


            </div>

        </div>




    )
}
export default Login