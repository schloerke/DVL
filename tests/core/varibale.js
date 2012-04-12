var dvl = require("../../dvl");

var vows = require("vows"),
    assert = require("assert");

var suite = vows.describe("dvl.def");

suite.addBatch({
  "variables": {
    "returns the correct init value on nothing": function() {
      var v = dvl.def();
      assert.strictEqual(v.value(), null);
    },
    "returns the correct init value on undefined": function() {
      var v = dvl.def(undefined);
      assert.strictEqual(v.value(), null);
    },
    "returns the correct init value on null": function() {
      var v = dvl.def(null);
      assert.strictEqual(v.value(), null);
    },
    "returns the correct init value": function() {
      var v = dvl.def(5);
      assert.strictEqual(v.value(), 5);
    },

    "returns the correct set value on undefined": function() {
      var v = dvl.def().value(undefined);
      assert.strictEqual(v.value(), null);
    },
    "returns the correct set value on null": function() {
      var v = dvl.def().value(null);
      assert.strictEqual(v.value(), null);
    },
    "returns the correct set value": function() {
      var v = dvl.def().value(5);
      assert.strictEqual(v.value(), 5);
    },
    "returns the correct set value on NaN": function() {
      var v = dvl.def().value(NaN);
      assert.isNaN(v.value());
    },

    "no initial name": function() {
      var v = dvl.def(5);
      assert.strictEqual(v.name(), '<anon>');
    },
    "setting name": function() {
      var v = dvl.def(5).name("some_name");
      assert.strictEqual(v.name(), "some_name");
    },
  },
});

suite.addBatch({
  "constants": {
    "returns the correct init value on nothing": function() {
      var v = dvl.const();
      assert.strictEqual(v.value(), null);
    },
    "returns the correct init value on undefined": function() {
      var v = dvl.const(undefined);
      assert.strictEqual(v.value(), null);
    },
    "returns the correct init value on null": function() {
      var v = dvl.const(null);
      assert.strictEqual(v.value(), null);
    },
    "returns the correct init value": function() {
      var v = dvl.const(5);
      assert.strictEqual(v.value(), 5);
    },

    "returns the correct set value on undefined": function() {
      var v = dvl.const(3).value(undefined);
      assert.strictEqual(v.value(), 3);
    },
    "returns the correct set value on null": function() {
      var v = dvl.const(3).value(null);
      assert.strictEqual(v.value(), 3);
    },
    "returns the correct set value": function() {
      var v = dvl.const(3).value(5);
      assert.strictEqual(v.value(), 3);
    },
    "returns the correct set value on NaN": function() {
      var v = dvl.const(3).value(NaN);
      assert.strictEqual(v.value(), 3);
    },

    "set to nothing does nothing": function() {
      var v = dvl.const(3);
      v.value();
      assert.strictEqual(v.value(), 3);
    },

    "no initial name": function() {
      var v = dvl.const(3);
      assert.strictEqual(v.name(), '<anon_const>');
    },
    "setting name": function() {
      var v = dvl.const(3).name("some_name");
      assert.strictEqual(v.name(), "some_name");
    },
  }
});

suite.export(module);
