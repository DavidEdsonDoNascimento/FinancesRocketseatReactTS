
import { Logo } from '../Logo';
import { Container, Content } from './styles'

type HeaderProps = {
    onOpenNewTransactionModal: () => void
}

export const Header = ({ onOpenNewTransactionModal }: HeaderProps) => {
    return (
        <Container>
            <Content>
                <Logo />
                <button type="button" onClick={onOpenNewTransactionModal}>
                    Nova Transação
                </button>
            </Content>
        </Container>
    );
}