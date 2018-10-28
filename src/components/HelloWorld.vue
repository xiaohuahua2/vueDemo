<template>
  <div class="hello">
    <div class="layout">
      <Layout>
        <Header>
          <Menu mode="horizontal" theme="dark" active-name="1">
            <div class="layout-logo"></div>
            <div class="layout-nav">
              <MenuItem name="1">
                <Icon type="ios-navigate"></Icon>
                Item 1
              </MenuItem>
              <MenuItem name="2">
                <Icon type="ios-keypad"></Icon>
                Item 2
              </MenuItem>
              <MenuItem name="3">
                <Icon type="ios-analytics"></Icon>
                Item 3
              </MenuItem>
              <MenuItem name="4">
                <Icon type="ios-paper"></Icon>
                Item 4
              </MenuItem>
            </div>
          </Menu>
        </Header>
        <Layout :style="{padding: '0 50px'}">
        <Breadcrumb :style="{margin: '16px 0'}">
        <BreadcrumbItem>Home</BreadcrumbItem>
        <BreadcrumbItem>Components</BreadcrumbItem>
        <BreadcrumbItem>Layout</BreadcrumbItem>
        </Breadcrumb>
        <Content :style="{padding: '24px 0', minHeight: '280px', background: '#fff'}">
        <Layout>
          <Sider hide-trigger :style="{background: '#fff'}">
          <Menu active-name="1-2" theme="light" width="auto" :open-names="['1']">
          <Submenu name="1">
            <template slot="title">
              <Icon type="ios-navigate"></Icon>
              Item 1
            </template>
            <MenuItem name="1-1">Option 1</MenuItem>
            <MenuItem name="1-2">Option 2</MenuItem>
            <MenuItem name="1-3">Option 3</MenuItem>
          </Submenu>
          <Submenu name="2">
            <template slot="title">
              <Icon type="ios-keypad"></Icon>
              Item 2
            </template>
            <MenuItem name="2-1">Option 1</MenuItem>
            <MenuItem name="2-2">Option 2</MenuItem>
          </Submenu>
          <Submenu name="3">
            <template slot="title">
              <Icon type="ios-analytics"></Icon>
              Item 3
            </template>
            <MenuItem name="3-1">Option 1</MenuItem>
            <MenuItem name="3-2">Option 2</MenuItem>
          </Submenu>
          </Menu>
          </Sider>
          <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
            <Select v-model="model1" style="width:200px" @on-change="selectOne(model1)">
              <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>
            <Select v-model="model1" style="width:200px">
              <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>
            <Select v-model="model3" style="width:200px" @on-change="selectThree
         ">
              <Option v-for="item in cityList3" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>
            <Button type="info" @click="queryData(that.idIndex)">查询</Button>
            <div>
              <Table border :columns="columns1" :data="data1"></Table>
            </div>

          </Content>
        </Layout>
        </Content>
        </Layout>
        <Footer class="layout-footer-center">2011-2016 &copy; TalkingData</Footer>
      </Layout>
    </div>
  </div>
  </div>
</template>

<script>
  const city_list = ["New York","London"]
export default {
  name: 'HelloWorld',
  data(){
    return {
    columns1: [
                    {
                        title: 'Name',
                        key: 'name'
                    },
                    {
                        title: 'Age',
                        key: 'age'
                    },
                    {
                        title: 'Address',
                        key: 'address'
                    }
                ],
                data1: [
                    {
                        name: 'John Brown',
                        age: 18,
                        address: 'New York No. 1 Lake Park',
                        date: '2016-10-03'
                    },
                    {
                        name: 'Jim Green',
                        age: 24,
                        address: 'London No. 1 Lake Park',
                        date: '2016-10-01'
                    },
                    {
                        name: 'Joe Black',
                        age: 30,
                        address: 'Sydney No. 1 Lake Park',
                        date: '2016-10-02'
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park',
                        date: '2016-10-04'
                    }
                ],
     messageID:[],
     that:this,
     idIndex:null,
     idData:[
      {id:1001,messageID:{id:10011001,value: 'New York01',label: 'New York01'}},
      {id:1001,messageID:{id:10011002,value: 'New York01',label: 'New York01'}},
      {id:1002,messageID:{id:10011003,value: 'New York01',label: 'New York01'}},
      {id:1002,messageID:{id:10011004,value: 'New York01',label: 'New York01'}},
      {id:2001,messageID:{id:10011005,value: 'New York01',label: 'New York01'}},
      {id:2001,messageID:{id:10011006,value: 'New York01',label: 'New York01'}},
      {id:2002,messageID:{id:10011007,value: 'New York01',label: 'New York01'}},
      {id:2002,messageID:{id:10011008,value: 'New York01',label: 'New York01'}},
     ],
     cityListItem:[
      {title:"New York",content:{id:1001,value: 'New York01',label: 'New York01'}},
      {title:"New York",content:{id:1002,value: 'New York02',label: 'New York02'}},
      {title:"London",content:{id:2001,value: 'London01',label: 'London01'}},
      {title:"London",content:{id:2002,value: 'London02',label: 'London02'}},
     ],
     cityList: [
                    {
                        value: 'New York',
                        label: 'New York'
                    },
                    {
                        value: 'London',
                        label: 'London'
                    },

                ],
                 cityList3: [

                ],
                model1: '',
                model3: '',
    }
  },
  methods:{
    selectOne:function(val){
      console.log(val)
      let it=[];
      city_list.map((item)=>{
        if(item == val){
          this.cityListItem.map(item =>{
            console.log(item["title"],"ii")
            if(item["title"]==val){
             it.push(item.content)
            }
          });
        }
      })
      this.cityList3 = it;
                console.log(this.cityList3)

    },
    selectThree:function(val){
          let it;
          this.cityListItem.map(item =>{
            if(item["content"].value==val){
             it=item["content"].id;
            }
          });
          this.idIndex = it;
          console.log(this.idIndex,"this.idIndex")
    },
    queryData:function(idIndex){
      let itemArr = [];
      this.idData.map(item => {
          if(idIndex == item.id){
           itemArr.push(item.messageID);
          }
      })
      this.messageID = itemArr;
               console.log(itemArr)
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .layout{
      border: 1px solid #d7dde4;
      background: #f5f7f9;
      position: relative;
      border-radius: 4px;
      overflow: hidden;
  }
  .layout-logo{
      width: 100px;
      height: 30px;
      background: #5b6270;
      border-radius: 3px;
      float: left;
      position: relative;
      top: 15px;
      left: 20px;
  }
  .layout-nav{
      width: 420px;
      margin: 0 auto;
      margin-right: 20px;
  }
  .layout-footer-center{
      text-align: center;
  }
</style>
