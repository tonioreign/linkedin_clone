import styled from 'styled-components';
import HomeSection from '../components/HomeSection';

const Home = props => {
    return (
        <Container>
            <HomeSection />
        </Container>
    );
};

export default Home;

const Container = styled.div`
    padding-top: 52px;
    max-width: 100%;
`;
