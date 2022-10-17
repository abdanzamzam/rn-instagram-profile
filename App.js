import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  useWindowDimensions,
  FlatList
} from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function App() {
  const window = useWindowDimensions();
  const [data, setData] = useState([
    {
      title: "Montain",
      description: "This is a montain",
      imageUrl:
        "https://images.unsplash.com/photo-1515446134809-993c501ca304?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    },
    {
      title: "Montain",
      description: "This is a montain",
      imageUrl:
        "https://images.unsplash.com/photo-1444492417251-9c84a5fa18e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
    },
    {
      title: "Montain",
      description: "This is a montain",
      imageUrl:
        "https://images.unsplash.com/photo-1564860924912-f27764fd2ab6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
    },
    {
      title: "Montain",
      description: "This is a montain",
      imageUrl:
        "https://images.unsplash.com/photo-1502311526760-ebc5d6cc0183?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=326&q=80"
    },
    {
      title: "Montain",
      description: "This is a montain",
      imageUrl:
        "https://images.unsplash.com/photo-1580606564012-266c2342450f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=773&q=80"
    },
    {
      title: "Montain",
      description: "This is a montain",
      imageUrl:
        "https://images.unsplash.com/photo-1567811544553-400218252756?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80"
    },
    {
      title: "Montain",
      description: "This is a montain",
      imageUrl:
        "https://images.unsplash.com/photo-1506193503569-d57d2a678510?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
    },
    {
      title: "Montain",
      description: "This is a montain",
      imageUrl:
        "https://images.unsplash.com/photo-1604820849194-837928614a4a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
    },
    {
      title: "Montain",
      description: "This is a montain",
      imageUrl:
        "https://images.unsplash.com/photo-1507629221898-576a56b530bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80"
    },
    {
      title: "Montain",
      description: "This is a montain",
      imageUrl:
        "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80"
    },
    {
      title: "Montain",
      description: "This is a montain",
      imageUrl:
        "https://images.unsplash.com/photo-1500838703623-76f427f7c8a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
    },
    {
      title: "Montain",
      description: "This is a montain",
      imageUrl:
        "https://images.unsplash.com/photo-1614183733044-a2bbd68e0b5d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
    }
  ]);

  return (
    <View style={{ flex: 1, backgroundColor: "#ffffff" }}>
      <View
        style={{ marginHorizontal: 20, marginTop: 50, flexDirection: "row" }}
      >
        <View>
          <Image
            source={{
              uri: "https://instagram.fcgk12-1.fna.fbcdn.net/v/t51.2885-19/280497262_154222730289761_3709977500185055546_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fcgk12-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=3OO0osnjwYcAX-T7e4H&edm=ACWDqb8BAAAA&ccb=7-5&oh=00_AT9zPzI5yIoFwW-nJkm931gcq8Su-m9ExZm0uFveOW25sQ&oe=6353E597&_nc_sid=1527a3"
            }}
            style={{
              width: 70,
              height: 70,
              borderRadius: 70 / 2,
              elevation: 2
            }}
          />
          <Text style={{ fontSize: 12, marginTop: 8 }}>@abdanzamzam</Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Text
              style={{ fontWeight: "bold", color: "#212121", marginRight: 5 }}
            >
              Abdan Zam Zam R.
            </Text>
            <FontAwesome
              size={15}
              color="dodgerblue"
              name="check-circle"
              backgroundColor="#3b5998"
            />
          </View>
          <Text style={{ fontSize: 10, color: "gray" }}>Tokoh Publik</Text>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: "flex-start",
            alignItems: "center",
            marginLeft: 7,
            marginTop: 12
          }}
        >
          <Text style={{ fontSize: 13 }}>Post</Text>
          <Text style={{ fontWeight: "bold", color: "#212121" }}>103</Text>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: "flex-start",
            alignItems: "center",
            marginTop: 12
          }}
        >
          <Text style={{ fontSize: 13 }}>Follower</Text>
          <Text style={{ fontWeight: "bold", color: "#212121" }}>96 RB</Text>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: "flex-start",
            alignItems: "center",
            marginTop: 12
          }}
        >
          <Text style={{ fontSize: 13 }}>Following</Text>
          <Text style={{ fontWeight: "bold", color: "#212121" }}>19</Text>
        </View>
      </View>
      <View style={{ marginHorizontal: 20, marginTop: 10 }}>
        <Text style={{ fontSize: 12 }}>👨‍💻 Software Engineer</Text>
        <Text style={{ fontSize: 12 }}>✉️ abdan.dev@gmail.com</Text>
        <Text style={{ fontSize: 12 }}>.</Text>
        <Text style={{ fontSize: 12 }}>
          Creator{" "}
          <Text style={{ color: "dodgerblue" }}>
            @serambilaravel @abdanlabs @bigzure.js
          </Text>
        </Text>
      </View>
      <View
        style={{ flexDirection: "row", marginHorizontal: 20, marginTop: 18 }}
      >
        <TouchableOpacity
          style={{
            flex: 1,
            paddingVertical: 7,
            backgroundColor: "dodgerblue",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 5,
            marginRight: 3,
            elevation: 2
          }}
        >
          <Text style={{ color: "#ffffff" }}>Unfollow</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flex: 1,
            paddingVertical: 7,
            backgroundColor: "gainsboro",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 5,
            marginLeft: 3,
            elevation: 2
          }}
        >
          <Text style={{ color: "black" }}>Send Message</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            paddingVertical: 7,
            paddingHorizontal: 7,
            marginLeft: 6,
            backgroundColor: "gainsboro",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 5,
            elevation: 2
          }}
        >
          {/* <Text style={{ color: "#ffffff" }}>+</Text> */}
          <FontAwesome
            size={18}
            color="black"
            name="user-plus"
            backgroundColor="#3b5998"
          />
        </TouchableOpacity>
      </View>
      <View
        style={{ flexDirection: "row", marginTop: 18, marginHorizontal: 20 }}
      >
        <TouchableOpacity
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <FontAwesome
            size={18}
            color="dodgerblue"
            name="image"
            backgroundColor="#3b5998"
          />
          <Text style={{ fontWeight: "bold", fontSize: 13 }}>Photos</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <FontAwesome
            size={18}
            color="gray"
            name="play"
            backgroundColor="#3b5998"
          />
          <Text style={{ fontSize: 13 }}>Videos</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <FontAwesome
            size={18}
            color="gray"
            name="tags"
            backgroundColor="#3b5998"
          />
          <Text style={{ fontSize: 13 }}>Tagged</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1, marginTop: 11, marginRight: 0.5 }}>
        <FlatList
          data={data}
          numColumns={3}
          renderItem={({ item, index }) => (
            <TouchableOpacity style={{ margin: 0.5 }}>
              <Image
                style={{
                  width: (window.width - 0.5) / 3,
                  height: (window.width - 0.5) / 3
                }}
                source={{ uri: item.imageUrl }}
              />
            </TouchableOpacity>
          )}
        />
      </View>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity
          style={{
            paddingVertical: 10,
            flex: 1,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <FontAwesome
            size={26}
            color="black"
            name="home"
            backgroundColor="#3b5998"
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            paddingVertical: 10,
            flex: 1,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <FontAwesome
            size={26}
            color="black"
            name="search"
            backgroundColor="#3b5998"
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            paddingVertical: 10,
            flex: 1,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <FontAwesome
            size={26}
            color="black"
            name="play-circle"
            backgroundColor="#3b5998"
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            paddingVertical: 10,
            flex: 1,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <FontAwesome
            size={26}
            color="black"
            name="shopping-cart"
            backgroundColor="#3b5998"
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{ paddingVertical: 10, flex: 1, alignItems: "center" }}
        >
          <Image
            source={{
              uri: "https://instagram.fcgk12-1.fna.fbcdn.net/v/t51.2885-19/280497262_154222730289761_3709977500185055546_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fcgk12-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=3OO0osnjwYcAX-T7e4H&edm=ACWDqb8BAAAA&ccb=7-5&oh=00_AT9zPzI5yIoFwW-nJkm931gcq8Su-m9ExZm0uFveOW25sQ&oe=6353E597&_nc_sid=1527a3"
            }}
            style={{
              width: 30,
              height: 30,
              borderRadius: 70 / 2,
              elevation: 2
            }}
          />
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
