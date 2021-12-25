import logoSVG from './../../assets/logo.svg'
import { Container, Content } from './styles'

type HeaderProps = {
    onOpenNewTransactionModal: () => void
}

export const Header = ({ onOpenNewTransactionModal }: HeaderProps) => {
    return (
        <Container>
            <Content>
                <img src={logoSVG} alt="dt money" />
                <button type="button" onClick={onOpenNewTransactionModal}>
                    Nova Transação
                </button>
            </Content>
        </Container>
    );
}