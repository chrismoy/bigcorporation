require 'test_helper'

class AllstaffControllerTest < ActionController::TestCase
  test "should get home" do
    get :home
    assert_response :success
  end

  test "should get select" do
    get :select
    assert_response :success
  end

  test "should get portal" do
    get :portal
    assert_response :success
  end

  test "should get capabilities" do
    get :capabilities
    assert_response :success
  end

end
