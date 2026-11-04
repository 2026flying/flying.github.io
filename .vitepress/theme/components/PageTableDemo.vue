<script setup>
import NavIcon from './NavIcon.vue'

const rows = [
  {
    no: 1,
    title: '关于12月1日至12月7日门诊医生考勤情况',
    by: '汤明坤',
    dept: '客户服务部',
    date: '2025-12-09',
    top: false
  },
  {
    no: 2,
    title: '关于征求《医院腔镜吻合器院内遴选管理办法》意见的通知',
    by: '邵静',
    dept: '设备物资部',
    date: '2025-12-08',
    top: false
  },
  { no: 3, title: '关于三号楼网络切换的通知', by: '孙中海', dept: '信息部', date: '2025-12-08', top: false },
  { no: 4, title: '关于12月11日召开中层干部会议的通知', by: '李刚', dept: '办公室', date: '2025-12-08', top: true },
  {
    no: 5,
    title: '关于加快固定资产盘点扫尾工作的提醒',
    by: '雒战波',
    dept: '保障部',
    date: '2025-12-08',
    top: false
  },
  {
    no: 6,
    title: '院工会关于2026年元旦春节期间开展送温暖活动的通知',
    by: '谢永丹',
    dept: '工会',
    date: '2025-12-08',
    top: false
  },
  {
    no: 7,
    title: '关于上报各科病危及专科紧急患者病种的通知',
    by: '庄良金',
    dept: '医务与社区部',
    date: '2025-12-08',
    top: false
  },
  {
    no: 8,
    title: '关于提醒卫生专业技术人员完成2025年继续医学教育学分的通知',
    by: '冉静',
    dept: '教学部',
    date: '2025-12-05',
    top: false
  }
]

const pages = [1, 2, 3, 4]
const current = 1
</script>

<template>
  <div class="pg-case">
    <!-- 筛选区：条件单行排布，操作按钮贴行尾 -->
    <section class="pg-card">
      <div class="pg-filter is-row">
        <div class="pg-frow">
          <label class="pg-field is-grow">
            <span>标题</span>
            <input class="pg-input" type="text" placeholder="请输入标题" />
          </label>
          <label class="pg-field">
            <span>发布人</span>
            <input class="pg-input" type="text" placeholder="请输入发布人" />
          </label>
          <label class="pg-field">
            <span>科室</span>
            <input class="pg-input" type="text" placeholder="请选择科室" />
          </label>
          <div class="pg-field">
            <span>发布时间</span>
            <span class="pg-date">
              <input class="pg-input" type="text" placeholder="开始日期" />
              <NavIcon name="calendar" :size="15" />
            </span>
            <i class="pg-tilde">—</i>
            <span class="pg-date">
              <input class="pg-input" type="text" placeholder="结束日期" />
              <NavIcon name="calendar" :size="15" />
            </span>
          </div>
          <div class="pg-factions">
            <button class="btn btn-primary btn-sm" type="button">
              <NavIcon name="search" :size="14" />
              <span>搜索</span>
            </button>
            <button class="btn btn-default btn-sm" type="button">重置</button>
          </div>
        </div>
      </div>
    </section>

    <!-- 表格区：表头近白、行高 50px、操作列吸右 -->
    <section class="pg-card is-flush">
      <div class="pg-card-head">
        <span class="pg-title">通知公告</span>
        
      </div>
      <div class="table-scroll">
        <table class="data-table is-flow pg-dt">
          <thead>
            <tr>
              <th class="col-index">序号</th>
              <th>标题</th>
              <th>发布人</th>
              <th>发布科室</th>
              <th>发布时间</th>
              <th class="is-center">是否置顶</th>
              <th class="col-action">操作</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="row in rows" :key="row.no">
              <td class="col-index">{{ row.no }}</td>
              <td class="cell-title"><a href="#">{{ row.title }}</a></td>
              <td>{{ row.by }}</td>
              <td>{{ row.dept }}</td>
              <td class="cell-time">{{ row.date }}</td>
              <td class="is-center">{{ row.top ? '是' : '否' }}</td>
              <td class="col-action">
                <span class="row-actions">
                  <button class="act" type="button">编辑</button>
                  <button class="act" type="button">删除</button>
                  <button class="act act-primary" type="button">详情</button>
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="pg-pager">
        <div class="pg-pager-btns">
          <button class="pg-page-btn" type="button" title="首页">|‹</button>
          <button class="pg-page-btn" type="button" title="上一页">‹</button>
          <button
            v-for="p in pages"
            :key="p"
            class="pg-page-btn"
            :class="{ 'is-active': p === current }"
            type="button"
          >
            {{ p }}
          </button>
          <button class="pg-page-btn" type="button" title="下一页">›</button>
          <button class="pg-page-btn" type="button" title="末页">›|</button>
        </div>
        <span class="pg-pager-info">1 - 10 / 40</span>
      </div>
    </section>
  </div>
</template>
