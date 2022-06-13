import styled from 'styled-components';

const HomeSection = () => {
    return (
        <Section>
            <h5>Hiring in a hurry?</h5>
            <p>
                Find talented pros in record time with Upwork and keep business
                moving.
            </p>
        </Section>
    );
};

export default HomeSection;

const Content = styled.div`
    max-width: 1128px;
    margin-left: auto;
    margin-right: auto;
`;

const Section = styled.div`
    min-height: 50px;
    padding: 16px 0;
    box-sizing: content-box;
    text-align: center;
    text-decoration: underline;
    display: flex;
    justify-content: center;

    h5 {
        color: #0a66c2;
        font-size: 14px;
        a {
            font-weight: 700;
        }
    }

    p {
        font-size: 14px;
        color: #434649;
        font-weight: 600;
    }

    @media (max-width: 768px) {
        flex-direction: column;
        padding: 0 5px;
    }
`;
