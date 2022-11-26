import { Row, Col, Button } from 'antd'
import Title from 'antd/es/typography/Title'
import { FacebookAuthProvider, signInWithPopup } from 'firebase/auth'
import { auth, db } from '../firebase/config'
import { doc, setDoc, serverTimestamp } from 'firebase/firestore'

const facebookProvider = new FacebookAuthProvider()

export default function Login() {
    const handleFacebookLogin = async () => {
        const { user } = await signInWithPopup(auth, facebookProvider)
        await setDoc(
            doc(db, 'users', user.uid),
            {
                name: user.displayName,
                email: user.email,
                photoURL: user.photoURL,
                providerId: user.providerId,
                createdAt: serverTimestamp(),
                id: user.uid,
            },
            { merge: true },
        )
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
