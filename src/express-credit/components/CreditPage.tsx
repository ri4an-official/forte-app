import { Margin } from '../../main-page/components/MainPage'
import { Advantages } from './Advantages'
import { Banner } from './Banner'
import { Calculator } from './Calculator'
import { GetCredit } from './GetCredit'
import { Questions } from './Questions'

export const CreditPage = () => (
    <>
        <Banner />
        <Margin>
            <Advantages />
            <Calculator />
            <GetCredit />
            <Questions />
        </Margin>
    </>
)
