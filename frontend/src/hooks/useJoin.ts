import { useQueryClient, useMutation } from "@tanstack/react-query";
import { JoinParams } from "../apis/requestJoin";
import { requestJoin } from "../apis/requestJoin";
import { isAxiosError } from "axios";

export const useJoin = () => {
  const queryClient = useQueryClient();
  const joinMutation = useMutation({
    mutationFn: async (params: JoinParams) => {
      try {
        await requestJoin(params);
        return { result: "success" as const };
      } catch (error) {
        if (isAxiosError(error) && error.response?.status === 409) {
          return { result: "conflict" as const };
        }
        throw error;
      }
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["join"] });
    },
  });
  return { join: joinMutation.mutateAsync };
};
