import { Text } from "react-native";

/**
 *
 * Files named index add no path segment to the URL. For example,
 * app/index.js matches /.
 * The following extensions are supported by default: js, jsx, ts, tsx.
 * Metro platform extensions (e.g. .ios.js, .native.ts) are not currently supported.
 */

// /home
export default function Home() {
    return <Text>Home page</Text>;
}