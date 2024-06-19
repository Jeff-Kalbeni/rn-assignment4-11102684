import * as React from "react";
import { Button, Image, SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";

// const AppButton = ({ onPress, title }) => (
//    <TouchableOpacity onPress={onPress}>
//     <LinearGradient
//       colors={["#004d40", "#009688"]}
//       style={styles.appButtonContainer}
//     >
//       <Text style={styles.appButtonText}>{title}</Text>
//     </LinearGradient>
//   </TouchableOpacity>
// );


const Login = () => {
  return (
    <SafeAreaView style={styles.container}>
      
      <View style={styles.welcomeNote}>
        <Text style={
            {color:'#356899',
              fontWeight: 600,
              fontSize: 22,
            }
            }>Jobizz</Text>

        <View>
            <Text style={{
              fontWeight: 'bold',
              fontSize: 27,
            }}>Welcome Back👋</Text>
            <Text>Let's log in. Apply to jobs!</Text>
        </View>
      </View>
        
      <View>
        <TextInput
          value="Caleb"
          style={styles.input}
          />
          <TextInput
          value="caleb@gmail.com"
          style={styles.input}
          />
      </View>
      
      <Button
        title="Log in"
        style={styles.button}
        
        />

      {/* <AppButton title="Log in"/> */}

      <View style={styles.continueRow}>
        <Image source={require('../assets/Line 182.png')} />
        <Text>   Or continue with   </Text>
        <Image source={require('../assets/Line 183.png')} />
      </View>

      <View style={styles.continueRow}>
        <Image source={require('../assets/cib_apple.png')}/>
        <Image source={require('../assets/flat-color-icons_google.png')}/>
        <Image source={require('../assets/ion_logo-facebook.png')}/>
      </View>

      <View style={styles.continueRow}>
        <Text>Haven't an account?
        <Text style={{
          color: '#000',
          fontWeight: 600,
        }}> Register</Text>
        </Text>
        
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,

  },

  appButtonContainer: {
    elevation: 8,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12
  },

  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  },

  welcomeNote: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 50,
  },
  input: {
    borderColor: "gray",
    width: "100%",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
  },
  button:{
    backgroundColor: '#356899',
  },
  continueRow: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    
  },
  }
)

export default Login;