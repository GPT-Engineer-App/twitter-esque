import { ChakraProvider, Box, Flex, VStack, HStack, IconButton, Input, Textarea, Button, Text, Avatar, Divider, useColorModeValue, useColorMode, Heading } from "@chakra-ui/react";
import { FaSun, FaMoon, FaTwitter, FaFeatherAlt, FaRegHeart, FaRetweet } from "react-icons/fa";

const Tweet = ({ username, content, avatar }) => {
  return (
    <Box borderWidth="1px" borderRadius="lg" p={4} mb={2} shadow="sm">
      <HStack spacing={3}>
        <Avatar name={username} src={avatar} />
        <VStack align="start">
          <Text fontWeight="bold">{username}</Text>
          <Text>{content}</Text>
        </VStack>
      </HStack>
      <HStack mt={2} justify="space-between">
        <IconButton size="sm" icon={<FaRegHeart />} aria-label="Like tweet" variant="ghost" />
        <IconButton size="sm" icon={<FaRetweet />} aria-label="Retweet" variant="ghost" />
      </HStack>
    </Box>
  );
};

const Index = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue("gray.50", "gray.700");
  const secondaryTextColor = useColorModeValue("gray.600", "gray.400");

  return (
    <ChakraProvider>
      <Box bg={bgColor} minH="100vh" py={6}>
        <VStack>
          <IconButton icon={colorMode === "light" ? <FaMoon /> : <FaSun />} aria-label="Toggle color mode" onClick={toggleColorMode} mb={4} />
          <Heading as="h1" size="xl" mb={6}>
            Chirper <FaTwitter />
          </Heading>
          <Box w={["95%", "85%", "70%", "60%", "50%"]} p={4} borderWidth="1px" borderRadius="lg" shadow="md" bg={useColorModeValue("white", "gray.800")}>
            <VStack spacing={4}>
              <Textarea placeholder="What's happening?" size="sm" resize="none" minHeight="100px" />
              <Button leftIcon={<FaFeatherAlt />} colorScheme="twitter" variant="solid">
                Chirp
              </Button>
            </VStack>
          </Box>
          <Divider my={6} />
          <Flex w={["95%", "85%", "70%", "60%", "50%"]} direction="column">
            {/* Sample Tweets */}
            <Tweet username="John Doe" content="Just started using Chirper! It's awesome!" avatar="https://images.unsplash.com/photo-1522556189639-b150ed9c4330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtYW4lMjBzbWlsaW5nfGVufDB8fHx8MTcxMDMyOTMxM3ww&ixlib=rb-4.0.3&q=80&w=1080" />
            <Tweet username="Jane Smith" content="Loving the dark mode on Chirper!" avatar="https://images.unsplash.com/photo-1580489944761-15a19d654956?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHNtaWxpbmd8ZW58MHx8fHwxNzEwMzI5MzE0fDA&ixlib=rb-4.0.3&q=80&w=1080" />
            {/* ... more tweets */}
          </Flex>
        </VStack>
      </Box>
    </ChakraProvider>
  );
};

export default Index;
