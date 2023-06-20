import { SafeAreaView } from "react-native-safe-area-context"
import { styles } from "./style"
import { ActivityIndicator, Text } from "react-native"
import { theme } from "../../../theme"

export const Loading = () => {

  return (
    <SafeAreaView style={styles.container}>
        <ActivityIndicator color={theme.palette.neutral.white} size='large' />
    </SafeAreaView>
  )
}
