(function () {
  'use strict';

  /**
   * A component to render the content type tab
   */
  
  function umbContentTypeTabController(editorService) {

    const vm = this;

    vm.removePromptIsVisible = false;

    vm.click = click;
    vm.removeTab = removeTab;
    vm.togglePrompt = togglePrompt;
    vm.hidePrompt = hidePrompt;
    vm.whenFocusName = whenFocusName;
    vm.whenFocus = whenFocus;
    vm.changeSortOrderValue = changeSortOrderValue;
    vm.changeName = changeName;

    function togglePrompt () {
      vm.removePromptIsVisible = !vm.removePromptIsVisible;
    }

    function hidePrompt () {
      vm.removePromptIsVisible = false;
    }

    function click () {
      if (vm.onClick) {
        vm.onClick({ tab: vm.tab });
      }
    }

    function removeTab () {
      if (vm.onRemove) {
        vm.onRemove({ tab: vm.tab });
        vm.removePromptIsVisible = false;
      }
    }

    function whenFocusName () {
      if (vm.onFocusName) {
        vm.onFocusName();
      }
    }

    function whenFocus () {
      if (vm.onFocus) {
        vm.onFocus();
      }
    }

    function changeSortOrderValue () {
      if (vm.onChangeSortOrderValue) {
        vm.onChangeSortOrderValue( {tab: vm.tab});
      }
    }

    function changeName () {
      if (vm.onChangeName) {
        vm.onChangeName({ name: vm.tab.name });
      }
    }

  }

  const umbContentTypeTabComponent = {
    templateUrl: 'views/components/contenttype/umb-content-type-tab.html',
    controllerAs: 'vm',
    transclude: true,
    bindings: {
      tab: '<',
      onClick: '&?',
      isOpen: '<?',
      allowRemove: '<?',
      onRemove: '&?',
      sorting: '<?',
      onFocusName: '&?',
      onFocus: '&?',
      onChangeSortOrderValue: '&?',
      onChangeName: '&?',
      valServerFieldName: '@'
    },
    controller: umbContentTypeTabController
  };

  angular.module('umbraco.directives').component('umbContentTypeTab', umbContentTypeTabComponent);
})();
