import { SafeAreaView } from "react-native-safe-area-context"
import { styles } from "./style"
import { Text } from "react-native"

export const Error = () => {

  return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.text}>Ocorreu um erro ao mostrar o cardápio. Por favor contate o suporte</Text>
    </SafeAreaView>
  )
}
