import {React} from 'react'
import { Alert } from 'react-bootstrap'

export default function Notification(props) {

    const capitalize=(word)=>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
      return (
        props.alert && <Alert variant={props.alert.type}>
          <Alert.Heading> <strong>{capitalize(props.alert.type)}</strong> {props.alert.msg}</Alert.Heading>
        </Alert>
      );
  }
