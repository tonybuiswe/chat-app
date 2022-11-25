import { Row, Col, Button } from 'antd'
import Title from 'antd/es/typography/Title'
import { FacebookAuthProvider, signInWithPopup } from 'firebase/auth'
import { auth } from '../firebase/config'
const facebookProvider = new FacebookAuthProvider()

export default function Login() {
    const handleFacebookLogin = () => {
        signInWithPopup(auth, facebookProvider)
    }

    return (
        <Row justify="center" style={{ height: 780 }}>
            <Col>
                <Title style={{ textAlign: 'center' }}>Team Chat</Title>
                <Button style={{ width: '100%', marginBottom: 5 }}>
                    Login with Google
                </Button>
                <Button style={{ width: '100%' }} onClick={handleFacebookLogin}>
                    Login with Facebook
                </Button>
            </Col>
        </Row>
    )
}
