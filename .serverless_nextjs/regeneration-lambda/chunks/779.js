"use strict";
exports.id = 779;
exports.ids = [779];
exports.modules = {
  /***/ 1976: /***/ (
    __unused_webpack_module,
    __webpack_exports__,
    __webpack_require__
  ) => {
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ Z: () => __WEBPACK_DEFAULT_EXPORT__,
      /* harmony export */
    });
    /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ =
      __webpack_require__(85893);
    /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ =
      __webpack_require__(67294);
    /* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_2__ =
      __webpack_require__(87583);

    class MySelect extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
      render() {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
          react_select__WEBPACK_IMPORTED_MODULE_2__ /* ["default"] */.ZP,
          {
            value: this.props.selected,
            onChange: this.props.onChange,
            options: this.props.options,
          }
        );
      }
    }
    /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = MySelect;

    /***/
  },

  /***/ 91949: /***/ (
    __unused_webpack_module,
    __webpack_exports__,
    __webpack_require__
  ) => {
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ qb: () => /* binding */ createPost,
      /* harmony export */ CP: () => /* binding */ updatePost,
      /* harmony export */ fR: () => /* binding */ deletePost,
      /* harmony export */
    });
    /* eslint-disable */ // this is an auto generated file. This will be overwritten
    const createPost = /* GraphQL */ `
      mutation CreatePost(
        $input: CreatePostInput!
        $condition: ModelPostConditionInput
      ) {
        createPost(input: $input, condition: $condition) {
          id
          title
          category
          countries
          select
          date
          createdAt
          content
          username
          updatedAt
        }
      }
    `;
    const updatePost = /* GraphQL */ `
      mutation UpdatePost(
        $input: UpdatePostInput!
        $condition: ModelPostConditionInput
      ) {
        updatePost(input: $input, condition: $condition) {
          id
          title
          category
          countries
          select
          date
          createdAt
          content
          username
          updatedAt
        }
      }
    `;
    const deletePost = /* GraphQL */ `
      mutation DeletePost(
        $input: DeletePostInput!
        $condition: ModelPostConditionInput
      ) {
        deletePost(input: $input, condition: $condition) {
          id
          title
          category
          countries
          select
          date
          createdAt
          content
          username
          updatedAt
        }
      }
    `;

    /***/
  },
};
