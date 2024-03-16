import "./App.css";
import Socials from "./components/Socials";
import { Box, Container, Link, Image } from "@chakra-ui/react";

function App() {
  return (
    <div className="App">
      <div>
        <a href="index.html" target="_blank"></a>
      </div>

      <div className="card">
        <h1>Cheesesauce Coin</h1>
        <Container maxW="2xl" centerContent>
          <Box boxSize="sm">
            <Image src="/cheesesaucelogo.jpg" alt="Cheese Sauce logo" />
          </Box>
          <Box padding="4" bg="yellow.200" color="black" maxW="md">
            Now serving the cheesiest, gooiest cheese on Planet Radix!
          </Box>
        </Container>
        <br />
        <Link
          href="https://ociswap.com/resource_rdx1t5d35pz7ej6m6p46zzkzrwegap5qp6cd9qhvsslxw6eyslmzsngn75"
          size="xl"
        >
          Buy on Ociswap!
        </Link>
        <br />
        <p>
          <Socials />
        </p>
      </div>
    </div>
  );
}

export default App;
