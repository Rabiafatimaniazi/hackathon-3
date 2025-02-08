import ProductDetail from '../components/deatailprodutpage'
import Emailinput from '../components/email'
import Feature from '../components/Feature '
import Listing from '../components/listling'

export default function page() {
  return (
    <div>
      <ProductDetail/>
      <Listing/>
      <Feature/>
      <Emailinput/>
    </div>
  )
}
