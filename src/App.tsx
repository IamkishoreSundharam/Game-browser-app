import "./App.css";
import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { Genre, Platform } from "./interfaces/interfaceCollection";
import { useState } from "react";
import PlatformList from "./components/PlatformList";
import SortBy from "./components/SortBy";
import Headings from "./components/Headings";

export interface QueryObject {
  genre: Genre | null;
  platform: Platform | null;
  selectOrder: string;
  searchResult: string;
}
const App = () => {
  const [querySelector, setQuerySelector] = useState<QueryObject>(
    {} as QueryObject
  );
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
        <GridItem area={"nav"}>
          <Navbar
            onSearchBarValue={(searchResult) =>
              setQuerySelector({ ...querySelector, searchResult })
            }
          ></Navbar>
        </GridItem>

        <Show above="lg">
          <GridItem area={"aside"} paddingX="5px">
            <GenreList
              selectedGenre={querySelector.genre}
              sendGenre={(genre) => {
                setQuerySelector({
                  ...querySelector,
                  genre,
                });
              }}
            />
          </GridItem>
        </Show>

        <GridItem area={"main"}>
          <Box paddingLeft={2} marginBottom={2}>
            <Headings Forheader={querySelector} />
            <HStack spacing={5} marginTop={2}>
              <PlatformList
                selectedPlatform={querySelector.platform}
                platformSelector={(platform) => {
                  setQuerySelector({ ...querySelector, platform });
                }}
              />
              <SortBy
                selectOrder={querySelector.selectOrder}
                onSelectOrder={(selectOrder) =>
                  setQuerySelector({ ...querySelector, selectOrder })
                }
              />
            </HStack>
          </Box>
          <GameGrid querySelector={querySelector} />
        </GridItem>
      </Grid>
    </>
  );
};

export default App;
