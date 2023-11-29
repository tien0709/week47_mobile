// HomeScreen.js
import React from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity, Image, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const HomeScreen = () => {


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <View style={styles.searchBar}>
            <TextInput
              style={styles.searchInput}
              placeholder="Search..."
              placeholderTextColor="#888888"
            />
            <Icon name="search" size={24} color="#888888" />
          </View>
          <View style={styles.notificationContainer}>
            <TouchableOpacity style={styles.notificationButton}>
              <Icon name="notifications" size={24} color="#3498db" />
            </TouchableOpacity>
          </View>
          <View style={styles.messContainer}>
            <TouchableOpacity style={styles.messButton}>
              <Icon name="message" size={24} color="#3498db" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.toolbar}>
          <TouchableOpacity style={styles.toolbarButton}>
            <Icon name="event" size={28} color="#333333" />
            <Text style={styles.toolbarText}>Sư kiện</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.toolbarButton}>
            <Icon name="explore" size={28} color="#333333" />
            <Text style={styles.toolbarText}>Khám phá</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.toolbarButton}>
            <Icon name="qr-code-scanner" size={28} color="#333333" />
            <Text style={styles.toolbarText}>Tạo mã QR</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.toolbarButton}>
            <Icon name="qr-code-scanner" size={28} color="#333333" />
            <Text style={styles.toolbarText}>Quét mã QR</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.body}>
        <View style={styles.event}>
            <Text style={styles.eventText}>Sự kiện</Text>
            <Image
                source={require('./images/event.png')}
                style={styles.imageEvent}
            />
        </View>
        <View style={styles.eventHot}>
            <Text style={styles.eventText}>Đề xuất sự kiện</Text>
            <View style={styles.eventHotFrame}>
                <Image
                    source={require('./images/hotFrame.png')}
                    style={styles.imageEventHot}
                />
                <Text style={styles.subjectText}>Tư vấn chuyên ngành cho Khoa Khoa học và Kỹ thuật máy tính</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>                   
                    <Icon name="calendar-today" size={28} color="#333333" />
                    <Text style={styles.hotcontentText}>Bắt đầu trong: 3 ngày</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    <Icon name="group" size={28} color="#333333" />
                    <Text style={styles.hotcontentText}>Tham gia: 286</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <Button
                        title="Tham gia"
                    color="#000000"
                   />
                </View>
            </View>
        </View>
      </View>
      <View style={styles.toolBarBeneath}>
        <TouchableOpacity style={styles.toolbarButton}>
                <Icon name="home" size={28} color="#333333" />
                <Text style={styles.toolbarText}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.toolbarButton}>
                <Icon name="explore" size={28} color="#333333" />
                <Text style={styles.toolbarText}>Khám phá</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.toolbarButton}>
                <Icon name="qr-code-scanner" size={28} color="#333333" />
                <Text style={styles.toolbarText}>Quét mã QR</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.toolbarButton}>
                <Icon name="forum" size={28} color="#333333" />
                <Text style={styles.toolbarText}>Forum</Text>
            </TouchableOpacity>    
            <TouchableOpacity style={styles.toolbarButton}>
                <Icon name="edit" size={28} color="#333333" />
                <Text style={styles.toolbarText}>Dóng góp</Text>
            </TouchableOpacity>     
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    backgroundColor: '#3498db',
    paddingTop: 50,
    paddingBottom: 10,
    paddingHorizontal: 8,
    marginBottom: 16,
    flexDirection: 'column', // Change to column direction
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 12,
    maxWidth: '70%',
    marginLeft: 8,
    flex: 1,
    paddingHorizontal: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 8,
    paddingLeft: 8,
    color: '#333333',
  },
  notificationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 12,
    backgroundColor: '#ffffff',
  },
  messContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 12,
    backgroundColor: '#ffffff',
  },
  notificationButton: {
    padding: 10,
  },
  messButton: {
    padding: 10,
  },
  toolbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#ffffff',
    padding: 8,
    borderRadius: 12,
    marginTop: 16, // Adjust margin top as needed
  },
  toolbarButton: {
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 2,
    margin: 5,
  },
  toolbarText: {
    marginTop: 8,
  },
  event: {
    paddingTop: 20,
    paddingLeft: 20,
  }, 

  eventText: {
     fontWeight: "bold",
     fontSize: 16,
  },

  imageEvent:{
     marginTop: 10,
     maxWidth: '100%',
  },
  eventHot: {
    marginTop: 20,
    marginLeft: 20,
  }, 
  
  eventHotFrame: {
    marginTop: 10,
    maxWidth: '95%',
    borderWidth: 2, 
    borderColor: '#f0f0f0',
    borderRadius: 12,
    alignItems: 'center',
  },

  imageEventHot:{
    maxWidth: '100%',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
 },
 subjectText: {
    fontWeight: "bold",
    margin: 10,
    textAlign: 'center',
 },

 hotcontentText: {
    margin: 5,
 },

 buttonContainer: {
    margin: 10,
    backgroundColor: '#6499E9', 
    borderRadius: 10, // Border radius to make corners rounded
    paddingHorizontal: 20, // Horizontal padding for the button
    elevation: 5, // Elevation for the shadow effect
    shadowColor: '#00E6D8', // Shadow color
    shadowOffset: { width: 6, height: 5 }, // Shadow offset
    shadowOpacity: 0.7, // Shadow opacity
    shadowRadius: 5, // Shadow radius
  },

  toolBarBeneath: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#ffffff',
    padding: 8,
    borderRadius: 12,
    marginTop: 16, // Adjust margin top as needed
  },

});


export default HomeScreen;
