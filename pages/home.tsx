import { Component } from "preact";

type UserAuth = {
  aio: string;
  amr: [string];
  email: string;
  family_name: string;
  given_name: string;
  idp: string;
  ipaddr: string;
  name: string;
  oid: string;
  rh: string;
  sub: string;
  tid: string;
  unique_name: string;
  uti: string;
  ver: string;
};

class Home extends Component {
  render({ ...props }) {
    const user: UserAuth = props.user;

    return !user ? (
      <p>
        Not logged in. <a href="/login">Login</a>
      </p>
    ) : (
      <div>
        <p>
          You are logged in! <a href="/logout">Logout</a>
        </p>
        <table>
          {Object.entries(user).map(([key, value]) => (
            <tr>
              <td>
                <b>{key}</b>
              </td>
              <td>{value}</td>
            </tr>
          ))}
        </table>
      </div>
    );
  }
}

export default Home;
