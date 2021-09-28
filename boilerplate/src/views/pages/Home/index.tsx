import React, { FunctionComponent } from 'react'
import BaseTemplate from '@views/templates/Base'
import { Container, Spacer, Hr, Row, Col } from '@components/Layout'
import { Title, Paragraph, Label } from '@components/Typography'
import Icon, { glyphs } from '@components/Icon'
import Button from '@components/Button'

const HomePage:FunctionComponent = () => (
  <BaseTemplate>
    <Container>
      <Title>React Client Boilerplate</Title>
      <Hr />
      <Spacer size={2} />
      {/* TYPOGRAPHY */}
      <Paragraph as="h5" color="greyDark" uppercase>Typography:</Paragraph>
      <Spacer size={2} />
      <Title>H1</Title>
      <Title as="h2">H2</Title>
      <Title as="h3">H3</Title>
      <Title as="h4">H4</Title>
      <Title as="h5">H5</Title>
      <Title as="h6">H6</Title>
      <Spacer size={4} />
      <Paragraph>Paragraph enim deserunt eu ullamco nostrud esse excepteur et minim pariatur aliquip officia cillum dolor occaecat.</Paragraph>
      <Spacer />
      <Label>Label deserunt veniam laborum in ex consequat dolore ad aute id esse.</Label>
      <Spacer size={4} />
      {/* ICONS */}
      <Paragraph as="h5" color="greyDark" uppercase>Icons:</Paragraph>
      <Spacer size={2} />
      <Row>
        {Object.keys(glyphs).map((glyph, i) => (
          <Col size={1} key={`icon-${i}`}>
            <Icon name={glyph} />
          </Col>
        ))}
      </Row>
      <Spacer size={4} />
      {/* BUTTONS */}
      <Paragraph as="h5" color="greyDark" uppercase>Buttons:</Paragraph>
      <Spacer size={2} />
      <Row>
        <Col size={{ sm: 6, md: 3 }}>
          <Button label="Primary" primary fullWidth />
        </Col>
        <Col size={{ sm: 6, md: 3 }}>
          <Button label="Secondary" secondary fullWidth />
        </Col>
        <Col size={{ sm: 6, md: 3 }}>
          <Button label="Default" fullWidth />
        </Col>
        <Col size={{ sm: 6, md: 3 }}>
          <Button label="Disabled" disabled fullWidth />
        </Col>
        <Col size={{ sm: 6, md: 3 }}>
          <Button label="Lorem ipsum" fullWidth iconStart={{ name: 'facebook' }} />
        </Col>
        <Col size={{ sm: 6, md: 3 }}>
          <Button label="Lorem ipsum" labelProps={{ fit: true }} fullWidth iconEnd={{ name: 'chevron-right' }} />
        </Col>
        <Col size={{ sm: 6, md: 3 }}>
          <Button label="Lorem ipsum" fullWidth justify="space-between" iconStart={{ name: 'facebook' }} iconEnd={{ name: 'chevron-right' }} />
        </Col>
        <Col size={{ sm: 6, md: 3 }}>
          <Button iconStart={{ name: 'facebook' }} />
        </Col>
      </Row>
      <Spacer size={4} />
      {/* GRID */}
      <Paragraph as="h5" color="greyDark" uppercase>Grid:</Paragraph>
      <Spacer size={2} />
      <Row>
        <Col size={12}>
          <div style={{ width: '100%', padding: 12, border: 'dashed 1px #ccc' }}>
            <Label>Col 12</Label>
          </div>
        </Col>
        <Col size={{ md: 6 }}>
          <div style={{ width: '100%', padding: 12, border: 'dashed 1px #ccc' }}>
            <Label>Col 6</Label>
          </div>
        </Col>
        <Col size={{ md: 6 }}>
          <div style={{ width: '100%', padding: 12, border: 'dashed 1px #ccc' }}>
            <Label>Col 6</Label>
          </div>
        </Col>
        <Col size={{ md: 4 }}>
          <div style={{ width: '100%', padding: 12, border: 'dashed 1px #ccc' }}>
            <Label>Col 4</Label>
          </div>
        </Col>
        <Col size={{ md: 4 }}>
          <div style={{ width: '100%', padding: 12, border: 'dashed 1px #ccc' }}>
            <Label>Col 4</Label>
          </div>
        </Col>
        <Col size={{ md: 4 }}>
          <div style={{ width: '100%', padding: 12, border: 'dashed 1px #ccc' }}>
            <Label>Col 4</Label>
          </div>
        </Col>
        <Col size={{ sm: 6, md: 3 }}>
          <div style={{ width: '100%', padding: 12, border: 'dashed 1px #ccc' }}>
            <Label>Col 3</Label>
          </div>
        </Col>
        <Col size={{ sm: 6, md: 3 }}>
          <div style={{ width: '100%', padding: 12, border: 'dashed 1px #ccc' }}>
            <Label>Col 3</Label>
          </div>
        </Col>
        <Col size={{ sm: 6, md: 3 }}>
          <div style={{ width: '100%', padding: 12, border: 'dashed 1px #ccc' }}>
            <Label>Col 3</Label>
          </div>
        </Col>
        <Col size={{ sm: 6, md: 3 }}>
          <div style={{ width: '100%', padding: 12, border: 'dashed 1px #ccc' }}>
            <Label>Col 3</Label>
          </div>
        </Col>
      </Row>
    </Container>
  </BaseTemplate>
)

export default HomePage
