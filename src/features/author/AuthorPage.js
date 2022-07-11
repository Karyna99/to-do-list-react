import Container from "../../common/Container"
import Header from "../../common/Header";
import Section from "../../common/Section";
import { ThemeProvider } from "styled-components";
import { theme } from "../../styled";

const Author = () => (
    <ThemeProvider theme={theme}>
        <Container>
            <Header
                title="O autorze" />
            <Section
                title="Karyna Kropiwnicka"
                body={
                    <p>
                        Cześć! Nazywam się Karyna, mam 22 lata, jestem studentką wydziału architektury. Od 4 lat mieszkam w Krakowie, ale pochodzę z Białorusi. Obecnie zajmuję się dyplomem i oczywiście nauką
                        na tym kursie😍
                    </p>
                }
            />
        </Container>
    </ThemeProvider>
);

export default Author;
