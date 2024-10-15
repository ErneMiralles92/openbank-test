
import success from './success.png';
import error from './error.png'

export default function Step3(props: {success?: boolean}) {
  return (
    <img src={props.success ? success : error}/>
  )
}
