<template>
  <div id="side-bar">
    <b-navbar toggleable>
      <!-- <b-navbar-toggle
        target="navbar-toggle-collapse"
        class="p-0 m-0 position-absolute"
        @click="menuToggle"
      >
        <template #default="{ expanded }">
          <div v-if="!expanded" class="toggle-btn">×閉じる</div>
          <div v-else class="toggle-btn">◯開く</div>
        </template>
      </b-navbar-toggle> -->
      <b-collapse id="navbar-toggle-collapse" is-nav>
        <b-navbar-nav class="ml-auto" />
      </b-collapse>
      <b-navbar-brand :to="'/'" exact>
        <div class="d-flex mb-2">TOP</div>
      </b-navbar-brand>
    </b-navbar>
  </div>
</template>

<style lang="scss" scoped>
#side-bar {
  margin-top: 20px;
  float: left;
}

.navbar {
  flex-direction: column;
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  padding-left: 40px;
  width: 100%;
  overflow-y: scroll;
  flex-wrap: nowrap;
  align-items: flex-start;
  height: 100vh;
  justify-content: flex-start;
  // border-right: solid 2px #edf0f3;
}

.menu-btn {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: #63c32d;
  text-align: center;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.16);

  &:hover {
    transition-duration: 0.4s;
    filter: contrast(140%);
  }
}

.menu-font {
  padding-left: 20px;
  align-self: center;

  &:hover {
    filter: contrast(60%);
  }
}

.menu-toggle {
  display: none;
  opacity: 0;
}

.navbar-brand {
  margin-right: 0;
}

li {
  list-style: decimal-leading-zero;
}

.navbar-toggler {
  border: none;
  bottom: 40px;
  left: 10px;
  width: 48px;
  height: 48px;
  outline: none;
}
</style>
