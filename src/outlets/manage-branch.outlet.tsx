import { Box, Button, LoadingOverlay, Pagination } from "@mantine/core";
import { IconSquareRoundedPlus } from "@tabler/icons-react";
import { useOutletContext } from "react-router-dom";
import CreateNewBranchForm from "../components/form-component/create-new-branch/create-new-branch.form";
import TableComponenet from "../components/table/table.component";
import { useManageBranch } from "../hooks/use-manage-branch";
import useModalProvider from "../hooks/use-modal-provider";

const headers = [
  { key: "name", title: "Name" },
  { key: "address", title: "Address" },
  { key: "city", title: "City" },
  { key: "state", title: "State" },
  { key: "country", title: "Country" },
];
const ManageBranchOutlet = ({}: any) => {
  const { hideModal, showModal, toggleModal } = useModalProvider();
  const { refetch, branchList, loading, addBranch } = useManageBranch();
  const { userInfo }: any = useOutletContext();
  const createNewBranch = async (data: any) => {
    try {
      userInfo &&
        (await addBranch({
          ...data,
          parent_organization: userInfo.organization_referance,
        }));
      hideModal();
    } catch (error) {}
  };

  const openCreateNewBranchModal = () => {
    showModal(
      <CreateNewBranchForm submitBranch={createNewBranch} />,
      "Create new branch"
    );
  };

  return (
    <Box className="h-full flex flex-col">
      <Box className="p-4 shadow-lg flex justify-between">
        <Box className="text-lg">Manage Branch</Box>
        <Box>
          <Button
            onClick={openCreateNewBranchModal}
            className="px-2"
            variant="default"
            color="yellow"
          >
            <IconSquareRoundedPlus className="mr-2" />
            Add new
          </Button>
        </Box>
      </Box>
      <Box className="flex-1 max-h-full overflow-auto">
        <Box className="h-full relative">
          {loading ? (
            <LoadingOverlay visible={loading} />
          ) : (
            <Box className="flex flex-col items-start p-4 relative max-h-full">
              <TableComponenet
                data={branchList}
                selection={[]}
                toggleRow={() => {}}
                toggleAll={() => {}}
                headers={headers}
              />
            </Box>
          )}
        </Box>
      </Box>
      <Box className="p-4 flex flex-row justify-end">
        <Pagination page={1} total={10} onChange={() => {}} />
      </Box>
    </Box>
  );
};

export default ManageBranchOutlet;
