<script setup>
const rows = [
  {
    code: 'ZHX202514',
    name: '郑晗轩',
    dept: '后勤保障部',
    section: '后勤部',
    date: '2016-02-04',
    mail: 'kdfkseed@qq.com',
    duty: '职员',
    title: '医师',
    tel: '1900001814'
  },
  {
    code: 'LYY202513',
    name: '柳依依',
    dept: '后勤保障部',
    section: '后勤部',
    date: '2020-12-01',
    mail: 'kdfkseed@qq.com',
    duty: '助教',
    title: '助教',
    tel: '1900001813'
  },
  {
    code: 'FTY202512',
    name: '傅天宇',
    dept: '人事科',
    section: '人事科',
    date: '2019-12-26',
    mail: 'kdfkseed@qq.com',
    duty: '主任',
    title: '主任医师',
    tel: '1900001812'
  },
  {
    code: 'GYF202501',
    name: '顾云飞',
    dept: '人事科',
    section: '小儿外科',
    date: '2015-07-14',
    mail: 'kdfkseed@qq.com',
    duty: '科长',
    title: '主任医师',
    tel: '1900001801'
  },
  {
    code: 'ZHX202514',
    name: '郑晗轩',
    dept: '后勤保障部',
    section: '后勤部',
    date: '2016-02-04',
    mail: 'kdfkseed@qq.com',
    duty: '职员',
    title: '医师',
    tel: '1900001814'
  },
  {
    code: 'LYY202513',
    name: '柳依依',
    dept: '后勤保障部',
    section: '后勤部',
    date: '2020-12-01',
    mail: 'kdfkseed@qq.com',
    duty: '助教',
    title: '助教',
    tel: '1900001813'
  },
  {
    code: 'FTY202512',
    name: '傅天宇',
    dept: '人事科',
    section: '人事科',
    date: '2019-12-26',
    mail: 'kdfkseed@qq.com',
    duty: '主任',
    title: '主任医师',
    tel: '1900001812'
  },
  {
    code: 'GYF202501',
    name: '顾云飞',
    dept: '人事科',
    section: '小儿外科',
    date: '2015-07-14',
    mail: 'kdfkseed@qq.com',
    duty: '科长',
    title: '主任医师',
    tel: '1900001801'
  },
  {
    code: 'ZHX202514',
    name: '郑晗轩',
    dept: '后勤保障部',
    section: '后勤部',
    date: '2016-02-04',
    mail: 'kdfkseed@qq.com',
    duty: '职员',
    title: '医师',
    tel: '1900001814'
  },
  {
    code: 'LYY202513',
    name: '柳依依',
    dept: '后勤保障部',
    section: '后勤部',
    date: '2020-12-01',
    mail: 'kdfkseed@qq.com',
    duty: '助教',
    title: '助教',
    tel: '1900001813'
  }
]
</script>

<template>
  <div class="pg-case">
    <!-- 人员档案宽表：11 列横向滚动，操作列吸右，4 项动作用语义色描边小按钮 -->
    <section class="pg-card is-flush">
      <div class="pg-staff-wrap">
        <div class="table-scroll">
          <table class="data-table is-flow pg-staff">
            <thead>
              <tr>
                <th class="col-index">序号</th>
                <th>工号</th>
                <th>姓名</th>
                <th>所属部门</th>
                <th>所属科室</th>
                <th>公休请假起算时间</th>
                <th>电子邮件</th>
                <th>聘任职务</th>
                <th>现聘职称</th>
                <th>联系电话</th>
                <th class="col-action">操作</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(row, i) in rows" :key="i">
                <td class="col-index">{{ i + 1 }}</td>
                <td class="cell-code">{{ row.code }}</td>
                <td class="cell-name">{{ row.name }}</td>
                <td>{{ row.dept }}</td>
                <td>{{ row.section }}</td>
                <td class="cell-date">{{ row.date }}</td>
                <td>{{ row.mail }}</td>
                <td>{{ row.duty }}</td>
                <td>{{ row.title }}</td>
                <td class="cell-tel">{{ row.tel }}</td>
                <td class="col-action">
                  <span class="row-actions is-outline">
                    <button class="op op-primary" type="button">编辑</button>
                    <button class="op op-danger" type="button">删除</button>
                    <button class="op op-success" type="button">详情</button>
                    <button class="op op-warning" type="button">干部审批表</button>
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  </div>
</template>
