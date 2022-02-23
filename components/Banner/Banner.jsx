import { bannerStyles as stls } from './bannerStyles'
import { Container, Row, Column, Link } from 'postonents'

const Banner = () => {
  return (
    <Container alignment='center' style={stls.container}>
      <Row>
        <Column style={stls.column}>
          <div style={stls.fullwidth}>
            <p style={stls.title}>Дорогие мужчины!</p>
            <p style={stls.p}>
              Поздравляем вас с праздником! <br /> Желаем оставаться надежным
              тылом для ваших близких, которые <br /> верят, что на вас всегда
              можно положиться. Пусть это так и будет! <br /> Будьте здоровы,
              счастливы и любимы
            </p>
            <p style={stls.pBottom}>Команда НАНО «ИПО»</p>
          </div>
        </Column>
      </Row>
    </Container>
  )
}

export default Banner
