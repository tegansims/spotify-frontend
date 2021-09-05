import React, { useState } from "react";
import {
  Flex, Button, Text, Input, Link
} from "theme-ui";
import { UploadIcon } from "@heroicons/react/solid";

const Spotify = () => {
  const [searchedTracks, setSearchedTracks] = useState(null);
  const [searchTracksTerm, setSearchTracksTerm] = useState(null);
  const [url, setUrl] = useState();

  const handleSearchTracks = () => fetch(`/tracks/search/${searchTracksTerm}`)
    .then((res) => res.json())
    .then((data) => {
      setSearchedTracks(data.searchedTracks.tracks.items);
    });

  return (
    <Flex
      sx={{
        bg: "background",
        height: "100%",
        width: "100%",
        p: 4,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Flex sx={{ mb: 20 }}>
        <Input
          placeholder="Enter your track"
          value={searchTracksTerm}
          onChange={(e) => setSearchTracksTerm(e.target.value)}
        />
        <Button sx={{ m: 10, width: "100%" }} onClick={handleSearchTracks} disabled={!searchTracksTerm}>Search tracks</Button>
      </Flex>

      {url && <iframe src={`https://open.spotify.com/embed/track/${url}`} title={url} width="300" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media" />}

      {searchedTracks?.length === 0 && <Text onClick={() => setSearchTracksTerm("")}>No results! Please try again</Text>}

      {searchedTracks?.map((track) => (
        <Flex key={track.uri} sx={{ mt: 10, alignItems: "center" }}>
          <Text sx={{ color: "primary" }} onClick={() => setUrl(track.id)}>
            {track.name}
          </Text>
          <Text>{" - "}</Text>
          <Flex sx={{ flexDirection: "row", flexWrap: "wrap", alignItems: "center" }}>
            {track.artists?.map((artist, index) => (
              <Text key={artist.uri}>
                {artist?.name}
                {index + 1 < track.artists.length ? "·" : ""}
              </Text>
            ))}
            <Link href={track.external_urls.spotify} target="_blank" sx={{ color: "primary" }}>
              <UploadIcon height={18} width={18} style={{ paddingLeft: 4 }} />
            </Link>
          </Flex>

        </Flex>
      ))}
    </Flex>
  );
};

export default Spotify;
