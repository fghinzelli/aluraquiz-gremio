import db from '../db.json';
import Widget from '../src/components/Widget/';
import Footer from '../src/components/Footer';
import QuizContainer from '../src/components/QuizContainer';
import QuizBackground from '../src/components/QuizBackground';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizLogo from '../src/components/QuizLogo';
import InputName from '../src/components/Input';
import Button from '../src/components/Button';
import { useState } from 'react';
import { useRouter } from 'next/router'

export default function Home() {
  const [name, setName] = useState('')
  const router = useRouter();

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
            <form onSubmit={event => {
              event.preventDefault();
              router.push(`/quiz?name=${name}`)
            }}>
              <InputName
                name="nomeDoUsuario"
                placeholder="Diz aí seu nome pra jogar :)"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
              <Button 
                disabled={name.length === 0}
                type="submit">
                  {`Jogar ${name}`}
              </Button>
            </form>
          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Header>
            <h1>Quizes da galera</h1>
          </Widget.Header>
          <Widget.Content>
            <p>lorem ipsum</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/fghinzelli" />
    </QuizBackground>
  )
}
