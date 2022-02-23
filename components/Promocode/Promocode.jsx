import { promocodeStyles as stls } from './promocodeStyles'
import { Container, Row, Column, Link } from 'postonents'

const Promocode = () => {
  return (
    <Container alignment='center' style={stls.container}>
      <Row>
        <Column style={stls.column}>
          <div style={stls.fullwidth}>
            <p style={stls.title}>Старт новых групп обучения - 04 марта</p>
            <p style={stls.p}>
              Начните своё обучение в первых числах Весны <br /> вместе с
              Институтом профессионального образования!
            </p>
            <Link href={'https://ipo.msk.ru'} style={stls.btn}>
              <span style={stls.link}>Выбрать программу</span>
            </Link>
          </div>
        </Column>
      </Row>
    </Container>
  )
}

export default Promocode
