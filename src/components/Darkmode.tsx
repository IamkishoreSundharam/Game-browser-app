import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

const Darkmodeswitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <>
      <HStack>
        <Switch
          colorScheme={"green"}
          isChecked={colorMode === "dark"}
          onChange={toggleColorMode}
        ></Switch>
        <Text whiteSpace={"nowrap"}>
          {colorMode === "dark" ? "Dark Theme" : "Light Theme"}
        </Text>
      </HStack>
    </>
  );
};

export default Darkmodeswitch;
